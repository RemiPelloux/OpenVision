
/* Address: 0x180006a30; Evidence: ev_951af4c56882feb7cdcd86d5b59d13786626c27c7eb919b49beae2090af586cd */

void FUN_180006a30(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_18001b580) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_180008290();
    *param_2 = lVar1;
  }
  return;
}

