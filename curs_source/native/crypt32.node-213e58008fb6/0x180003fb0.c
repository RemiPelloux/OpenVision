
/* Address: 0x180003fb0; Evidence: ev_af6de3f7a86f5bae654a029bbe7ff85ab775779467a27de9b463fd16a7fcf1ed */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 FUN_180003fb0(undefined8 param_1,undefined8 *param_2)

{
  code *pcVar1;
  int iVar2;
  undefined8 uVar3;
  undefined1 auStack_128 [32];
  undefined8 local_108;
  undefined8 local_100;
  undefined8 local_f8;
  undefined8 local_f0;
  ulonglong local_d8;
  undefined8 local_d0;
  longlong local_b8;
  undefined8 *local_b0;
  LPVOID local_78;
  longlong local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180021000 ^ (ulonglong)auStack_128;
  FUN_1800023d0(&local_d8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  pcVar1 = *(code **)(local_70 + 8);
  if (local_b8 == 0) {
    local_108 = local_d0;
    local_70 = *(undefined8 *)(local_70 + 0x10);
    iVar2 = napi_get_undefined(local_d0,&local_100);
    if (iVar2 != 0) {
      uVar3 = FUN_180001210(&local_108);
      FUN_1800014f0(local_68,uVar3);
                    /* WARNING: Subroutine does not return */
      FUN_180006d04(local_68,&DAT_18001f750);
    }
  }
  else {
    local_100 = *local_b0;
    local_70 = *(undefined8 *)(local_70 + 0x10);
  }
  local_f8 = local_d0;
  local_f0 = local_100;
  (*pcVar1)(&local_d8,&local_f8);
  if (local_78 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_78);
  }
  return 0;
}

