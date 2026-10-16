
/* Address: 0x18000dd80; Evidence: ev_1bab89a12a75f5ebdf269ebea36c6a820d8dd97b5e24fed9585cc546868b305e */

void FUN_18000dd80(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_1800246f0) && ((DAT_180023858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_18000f640();
    *param_2 = lVar1;
  }
  return;
}

