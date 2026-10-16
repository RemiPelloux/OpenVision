
/* Address: 0x180007948; Evidence: ev_b9d7304ec0a58a5e083821b5c659f85ca0cd5f747cfd052468a705c15051231d */

void FUN_180007948(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_18001c3d0)[param_3]) && ((DAT_18001b858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}

