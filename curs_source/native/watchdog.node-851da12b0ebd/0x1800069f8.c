
/* Address: 0x1800069f8; Evidence: ev_2f3706512d265cfe248e552515398ad8e89579d336b4501b77cd6a832a2af64f */

void FUN_1800069f8(longlong param_1,longlong *param_2,longlong param_3)

{
  undefined **ppuVar1;
  
  if ((*param_2 != (&DAT_18001b308)[param_3]) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    ppuVar1 = __acrt_update_thread_locale_data();
    *param_2 = (longlong)ppuVar1;
  }
  return;
}

