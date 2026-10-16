
/* Address: 0x180012d40; Evidence: ev_830d96c2e003b5d0068d284af04e84785c7f4c498ea0586c77ed7f7bad9aded5 */

undefined8 FUN_180012d40(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000d680();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180024bf0)) {
      if ((*(byte *)((&DAT_1800247f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_1800247f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000d680();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000d6a4();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000c3ec();
  }
  return 0xffffffffffffffff;
}

