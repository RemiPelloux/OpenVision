
/* Address: 0x180002aa0; Evidence: ev_77749d60eb92ca10c8558cd999f815510d4daa99b1e86bfaf21fdd1968823adc */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002aa0(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined1 auStack_b8 [48];
  undefined8 local_88 [2];
  longlong local_78 [10];
  ulonglong local_28;
  
  local_28 = DAT_180023000 ^ (ulonglong)auStack_b8;
  puVar3 = FUN_180002c30(local_88,param_2,FUN_180002330);
  uVar1 = *param_3;
  iVar2 = napi_set_named_property(uVar1,param_3[1],"getProcessList",puVar3[1]);
  if (iVar2 != 0) {
    FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_78,&DAT_180021cb0);
  }
  puVar3 = FUN_180002c30(local_88,param_2,FUN_1800027b0);
  iVar2 = napi_set_named_property(uVar1,param_3[1],"getProcessCpuUsage",puVar3[1]);
  if (iVar2 == 0) {
    uVar1 = param_3[1];
    *param_1 = *param_3;
    param_1[1] = uVar1;
    return param_1;
  }
  FUN_1800014a0(local_78,uVar1);
                    /* WARNING: Subroutine does not return */
  FUN_18000837c(local_78,&DAT_180021cb0);
}

