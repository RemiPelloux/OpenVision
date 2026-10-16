
/* Address: 0x180006880; Evidence: ev_25a829a3f385de32bbfa99248f04bb861ee3bfce7f425633b3cf11c5d4f6d2f9 */

void FUN_180006880(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_18001b580) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_1800080e0();
    *param_2 = lVar1;
  }
  return;
}

