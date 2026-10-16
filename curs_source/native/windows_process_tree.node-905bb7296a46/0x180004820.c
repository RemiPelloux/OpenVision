
/* Address: 0x180004820; Evidence: ev_9190a2bfd36a97bc857d3fe3b8e060360404f88b02c3de96c401743c4ae22a2f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180004820(longlong *param_1)

{
  code *pcVar1;
  longlong lVar2;
  int iVar3;
  longlong *plVar4;
  undefined1 auStack_148 [32];
  undefined8 local_128;
  longlong local_120 [3];
  undefined **local_108;
  undefined8 local_100 [2];
  undefined8 local_f0;
  longlong local_e8;
  char local_e0;
  longlong local_d8 [4];
  longlong local_b8 [10];
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180023000 ^ (ulonglong)auStack_148;
  if (param_1[0xb] == 0) {
    (**(code **)(*param_1 + 0x20))();
  }
  else {
    pcVar1 = *(code **)(*param_1 + 0x28);
    plVar4 = param_1 + 9;
    lVar2 = param_1[1];
    if (0xf < (ulonglong)param_1[0xc]) {
      plVar4 = (longlong *)*plVar4;
    }
    iVar3 = napi_create_string_utf8(lVar2,plVar4,param_1[0xb],&local_128);
    if (iVar3 != 0) {
      FUN_1800014a0(local_b8,lVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_b8,&DAT_180021cb0);
    }
    iVar3 = napi_create_error(lVar2,0,local_128,local_120);
    if (iVar3 != 0) {
      FUN_1800014a0(local_68,lVar2);
                    /* WARNING: Subroutine does not return */
      FUN_18000837c(local_68,&DAT_180021cb0);
    }
    FUN_1800017d0(&local_108,lVar2,local_120[0]);
    (*pcVar1)(param_1,&local_108);
    FUN_180002f40(local_d8);
    local_108 = std::exception::vftable;
    FUN_180007fc8(local_100);
    if ((local_e8 != 0) && (local_e0 == '\0')) {
      napi_delete_reference(local_f0);
    }
  }
  return 0;
}

