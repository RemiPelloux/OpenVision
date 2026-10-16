
/* Address: 0x180006760; Evidence: ev_d13ff9f0b93d74efdf9aaf5e728dd7067f83757debe46ad28aee19adf864b6c4 */

void FUN_180006760(longlong param_1,longlong *param_2)

{
  longlong lVar1;
  
  if ((*param_2 != DAT_18001a580) && ((DAT_180019858 & *(uint *)(param_1 + 0x3a8)) == 0)) {
    lVar1 = FUN_180007fc0();
    *param_2 = lVar1;
  }
  return;
}

