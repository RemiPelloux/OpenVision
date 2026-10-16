
/* Address: 0x180006728; Evidence: ev_146db5bb1c14af6535965af8fb3249fa9af8c469ca2b6abac59e618db05ccb88 */

void FUN_180006728(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_18001a308)[param_3]) && ((DAT_180019858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}

