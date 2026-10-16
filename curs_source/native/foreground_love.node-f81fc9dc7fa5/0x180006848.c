
/* Address: 0x180006848; Evidence: ev_19d07eedebb287a9cfcf9dfd211583d2dec7aa8caedd5ddba56c11b81b551795 */

void FUN_180006848(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_18001b308)[param_3]) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}

