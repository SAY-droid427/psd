from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import APIView

from apps.tms.models import ActiveUserProfile, PS2TSTransfer, TS2PSTransfer
from apps.tms.serializers import PS2TSTransferSerializer, TS2PSTrnasferSerializer


#without authentication
class PS2TS(APIView):
    def post(self, request, *args, **kwargs):
        try:
            #hardcoded user for now
            #active_user = ActiveUserProfile.objects.get(email='nrupeshsurya@gmail.com')
            active_user = ActiveUserProfile.objects.get(email=request.user.email)
            if not active_user.is_active_tms:
                raise Exception('Access Denied. User not present in active user list')
        except Exception:
            return Response(
                data = {
                    'error': True,
                    'message': 'Access Denied. User not present in active user list',
                    'data': {},
                },
                status = status.HTTP_403_FORBIDDEN
            )
        try:
                serializer = PS2TSTransferSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save(applicant=active_user,cgpa=float(active_user.cgpa))
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(data={'error': str(e),}, status=status.HTTP_400_BAD_REQUEST)
        
class TS2PS(APIView):
    def post(self, request, *args, **kwargs):
        try:
            active_user = ActiveUserProfile.objects.get(email=request.user.email)
            if not active_user.is_active_tms:
                raise Exception('Access Denied. User not present in active user list')
        except Exception:
            return Response(
                data = {
                    'error': True,
                    'message': 'Access Denied. User not present in active user list',
                    'data': {},
                },
                status = status.HTTP_403_FORBIDDEN
            )
        else:
            serializer = TS2PSTrnasferSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save(applicant=active_user, cgpa=active_user.cgpa)
            return Response(
                data = {
                    'error': False,
                    'message': 'TS2PS form saved successfully',
                    'data': {},
                },
                status = status.HTTP_201_CREATED
            )