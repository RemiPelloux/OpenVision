
/* Address: 0x1800024e0; Evidence: ev_cf3b7a3f2808aa59d4b0f194d519f5ba56e3461a26db8813b907abfb526ceecb */

int FUN_1800024e0(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}

