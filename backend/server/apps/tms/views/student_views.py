from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import APIView

from apps.tms.models import PS2TSTransfer, ActiveUserProfile
from apps.tms.serializers import PS2TSTransferSerializer


#without authentication
class PS2TS(APIView):
    def post(self, request, *args, **kwargs):
        #hardcoded user for now
        active_user = ActiveUserProfile.objects.get(email='nrupeshsurya@gmail.com')
        try:
                ps2ts_form = PS2TSTransfer.objects.create(applicant=active_user,
                cgpa=float(active_user.cgpa),sub_type=request.data['sub_type'],
                supervisor_email=request.data['supervisor_email'],
                hod_email=request.data['hod_email'],
                thesis_locale=request.data['thesis_locale'],
                thesis_subject=request.data['thesis_subject'],
                name_of_org=request.data['name_of_org'],
                expected_deliverables=request.data['expected_deliverables'])
                ps2ts_form.save()
                return Response(data=request.data,status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(data=e, status=status.HTTP_400_BAD_REQUEST)
        
