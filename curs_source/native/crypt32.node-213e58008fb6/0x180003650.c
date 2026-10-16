
/* Address: 0x180003650; Evidence: ev_361ef9b68059a25ee816e09384ce338a8fa4671e805440acf735cfe2ce9e170e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_180003650(undefined8 param_1,undefined8 *param_2)

{
  longlong lVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 uVar4;
  undefined1 auStack_148 [32];
  longlong local_128 [2];
  longlong local_118;
  longlong lStack_110;
  longlong local_108;
  longlong local_100;
  ulonglong local_e8;
  longlong local_e0;
  longlong local_d0;
  LPVOID local_88;
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180021000 ^ (ulonglong)auStack_148;
  FUN_1800023d0(&local_e8,*(ulonglong *)*param_2,*(ulonglong *)param_2[1]);
  local_118 = local_e0;
  lStack_110 = local_d0;
  if (local_d0 == 0) {
    local_128[0] = local_e0;
    FUN_180001270(local_128,&local_108);
    local_118 = local_108;
    lStack_110 = local_100;
  }
  iVar2 = napi_unwrap(local_118,lStack_110,local_128);
  lVar1 = local_128[0];
  if (iVar2 != 0) {
    puVar3 = FUN_180001310(&local_118,&local_108);
    uVar4 = FUN_180001210(puVar3);
    FUN_1800014f0(local_78,uVar4);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  if (local_128[0] == 0) {
    local_118 = 0;
    lStack_110 = 0;
  }
  else {
    if (*(HCERTSTORE *)(local_128[0] + 0x28) != (HCERTSTORE)0x0) {
      CertCloseStore(*(HCERTSTORE *)(local_128[0] + 0x28),0);
    }
    *(undefined8 *)(lVar1 + 0x28) = 0;
    local_128[0] = local_e0;
    FUN_180001270(local_128,&local_118);
  }
  lVar1 = lStack_110;
  if (local_88 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_88);
  }
  return lVar1;
}

