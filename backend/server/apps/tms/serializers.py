from rest_framework import serializers
from .models import PS2TSTransfer, TS2PSTransfer

class PS2TSTransferSerializer(serializers.ModelSerializer):

    class Meta:
        model = PS2TSTransfer
        fields = ['supervisor_email','hod_email','sub_type','thesis_locale','thesis_subject','name_of_org','expected_deliverables']

class TS2PSTrnasferSerializer(serializers.ModelSerializer):

    class Meta:
        model = TS2PSTransfer
        fields = ['hod_mail', 'sub_type', 'reason_for_transfer', 'name_of_org',]
