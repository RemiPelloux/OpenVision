
/* Address: 0x1800037b0; Evidence: ev_138a958196653f6f5cfff89a029fd8d5e644d4a647011a5ed9f25acf8ed5d3ba */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong FUN_1800037b0(undefined8 param_1,undefined8 *param_2)

{
  longlong lVar1;
  int iVar2;
  longlong *plVar3;
  undefined8 *puVar4;
  undefined8 uVar5;
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
  if (iVar2 != 0) {
    puVar4 = FUN_180001310(&local_118,&local_108);
    uVar5 = FUN_180001210(puVar4);
    FUN_1800014f0(local_78,uVar5);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04(local_78,&DAT_18001f750);
  }
  if (local_128[0] == 0) {
    local_118 = 0;
    lStack_110 = 0;
    plVar3 = &local_118;
  }
  else {
    plVar3 = FUN_180002820(local_128[0],&local_118,(longlong)&local_e8);
  }
  lVar1 = plVar3[1];
  if (local_88 != (LPVOID)0x0) {
    thunk_FUN_18000c960(local_88);
  }
  return lVar1;
}

