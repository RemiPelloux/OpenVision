
/* Address: 0x180003490; Evidence: ev_a0b20c696e531555b12213356ebaf29da455b6157865f918660959d8c4baabff */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180003490(undefined8 *param_1)

{
  int iVar1;
  undefined1 auStack_98 [32];
  longlong local_78 [2];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_98;
  *param_1 = &PTR_FUN_18001e0a8;
  if (param_1[2] != 0) {
    iVar1 = napi_get_reference_value(param_1[1],param_1[2],local_78);
    if (iVar1 != 0) {
      FUN_1800014c0(local_68,param_1[1]);
                    /* WARNING: Subroutine does not return */
      FUN_180006f84(local_68,&DAT_180020780);
    }
    if ((local_78[0] != 0) && (*(char *)(param_1 + 4) != '\0')) {
      napi_remove_wrap(param_1[1],local_78[0],0);
    }
  }
  if (param_1[2] != 0) {
    if (*(char *)(param_1 + 3) == '\0') {
      napi_delete_reference(param_1[1]);
    }
    param_1[2] = 0;
  }
  return;
}

