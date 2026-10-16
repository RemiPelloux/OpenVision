
/* Address: 0x180008424; Evidence: ev_5057e04d8e5ecec7dcc8c5699c212ecc72b7e325780fb17ea6da3184e6c754f4 */

int FUN_180008424(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}

