
/* Address: 0x18000d84c; Evidence: ev_494058c33f15761ad7365211d13054a5f5639f7f065989826e1accd2cfbe7356 */

byte FUN_18000d84c(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001cb50)) {
      return *(byte *)((&DAT_18001c750)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                      (ulonglong)(param_1 & 0x3f) * 0x48) & 0x40;
    }
    p_Var1 = FUN_1800072a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_180005fec();
  }
  return 0;
}

