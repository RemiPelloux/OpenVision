
/* Address: 0x180002340; Evidence: ev_b5ca9ba7ec16b7e2efe768582cb95437feb76d5bc2a2728d5a631b0ee655f777 */

int FUN_180002340(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}

