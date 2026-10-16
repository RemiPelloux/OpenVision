
/* Address: 0x1800068b4; Evidence: ev_dcccad362c2c35900e3dcbd133cc4764abfac80ccae6f6b627a50663af998e88 */

void FUN_1800068b4(longlong param_1,longlong *param_2,longlong param_3)

{
  longlong lVar1;
  
  if ((*param_2 != (&DAT_18001b580)[param_3]) && ((DAT_18001a858 & *(uint *)(param_1 + 0x3a8)) == 0)
     ) {
    lVar1 = FUN_1800080e0();
    *param_2 = lVar1;
  }
  return;
}

