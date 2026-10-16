
/* Address: 0x180016430; Evidence: ev_affe0bfc443094294b589a858668d59254a62ca7bf7d072c5cbe9d0a97b9ea49 */

undefined8 FUN_180016430(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_180010dc0();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180029d20)) {
      if ((*(byte *)((&DAT_180029920)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_180029920)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_180010dc0();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_180010de4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000f91c();
  }
  return 0xffffffffffffffff;
}

