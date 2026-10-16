
/* Address: 0x18000dd48; Evidence: ev_d68a9d9dc51a2a740c1b750730418db0385c52c4174be66e01f2bc2b095c2d7d */

void FUN_18000dd48(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_180024470)[param_3]) && ((DAT_180023858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}

