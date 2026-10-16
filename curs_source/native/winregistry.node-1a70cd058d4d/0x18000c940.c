
/* Address: 0x18000c940; Evidence: ev_d51e323d2bb2bde3a779e99c7d60b67085453b5ded1b3ded95508ec1e4f33e45 */

undefined8 FUN_18000c940(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_180007280();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001cb50)) {
      if ((*(byte *)((&DAT_18001c750)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_18001c750)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_180007280();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_180005fec();
  }
  return 0xffffffffffffffff;
}

