
/* Address: 0x180006a64; Evidence: ev_e09c51435b750fc3d3af291a7fb3ac0e78b8f05d43459751a95213e5f52507a7 */

void FUN_180006a64(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_18001b580)[param_3]) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_180008290();
    *param_2 = lVar1;
  }
  return;
}

