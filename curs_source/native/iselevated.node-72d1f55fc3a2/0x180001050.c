
/* Address: 0x180001050; Evidence: ev_7cc02f200f3450bc08386f830ec2d8815942b3556bf9d0198010350a900f3c49 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180001050(undefined8 param_1)

{
  BOOL BVar1;
  undefined1 auStackY_98 [32];
  BOOL local_38 [2];
  PSID local_30;
  undefined8 local_28;
  _SID_IDENTIFIER_AUTHORITY local_20;
  ulonglong local_18;
  
  local_18 = DAT_180019000 ^ (ulonglong)auStackY_98;
  local_20.Value[4] = '\0';
  local_20.Value[5] = '\x05';
  local_38[0] = 0;
  local_30 = (PSID)0x0;
  local_20.Value[0] = '\0';
  local_20.Value[1] = '\0';
  local_20.Value[2] = '\0';
  local_20.Value[3] = '\0';
  BVar1 = AllocateAndInitializeSid(&local_20,'\x02',0x20,0x220,0,0,0,0,0,0,&local_30);
  if (BVar1 != 0) {
    CheckTokenMembership((HANDLE)0x0,local_30,local_38);
  }
  if (local_30 != (PSID)0x0) {
    FreeSid(local_30);
  }
  napi_get_boolean(param_1,local_38[0] != 0,&local_28);
  return local_28;
}

