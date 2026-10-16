
/* Address: 0x18000bb00; Evidence: ev_e6e492cba161ce799f1be62bca1c088b55ff2471ca6e5c232de381dea95072f3 */

undefined8 FUN_18000bb00(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000632c();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_180006350();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001ba80)) {
      if ((*(byte *)((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_18001b680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000632c();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_180006350();
    *(undefined4 *)p_Var1 = 9;
    FUN_1800061a8();
  }
  return 0xffffffffffffffff;
}

