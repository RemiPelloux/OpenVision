
/* Address: 0x180001760; Evidence: ev_26a341d800f163227a741a0d18e851551e1bdb3e687ac0b8f6cc717fc1131cf8 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180001760(undefined8 *param_1,undefined8 param_2,longlong param_3)

{
  int iVar1;
  longlong lVar2;
  undefined1 auStack_a8 [32];
  undefined8 *local_88 [3];
  undefined8 local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_a8;
  lVar2 = -1;
  do {
    lVar2 = lVar2 + 1;
  } while (*(char *)(param_3 + lVar2) != '\0');
  local_88[0] = param_1;
  iVar1 = napi_create_string_utf8(param_2,param_3,lVar2,&local_70);
  if (iVar1 == 0) {
    iVar1 = napi_create_error(param_2,0,local_70,local_88);
    if (iVar1 == 0) {
      FUN_1800018d0(param_1,param_2,(longlong)local_88[0]);
      return param_1;
    }
    FUN_1800014c0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  FUN_1800014c0(local_68,param_2);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_68,&DAT_180020780);
}

