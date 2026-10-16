
/* Address: 0x1800116d0; Evidence: ev_98ccd49783d43b6e27c304291770ff6f87319e17fcb3113729782b899842d8c6 */

undefined8 FUN_1800116d0(uint param_1)

{
  __acrt_ptd *p_Var1;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000c010();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_180022bf0)) {
      if ((*(byte *)((&DAT_1800227f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_1800227f0)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000c010();
    *(undefined4 *)p_Var1 = 0;
    p_Var1 = FUN_18000c034();
    *(undefined4 *)p_Var1 = 9;
    FUN_18000ad7c();
  }
  return 0xffffffffffffffff;
}

