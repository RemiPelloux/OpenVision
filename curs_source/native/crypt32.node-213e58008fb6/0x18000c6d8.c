
/* Address: 0x18000c6d8; Evidence: ev_48bcca41f5e92936ddb14a534d0a8443a6aa13c1d1a893cc368f2f0bfe6d67f2 */

void FUN_18000c6d8(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_180022470)[param_3]) && ((DAT_180021858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}

