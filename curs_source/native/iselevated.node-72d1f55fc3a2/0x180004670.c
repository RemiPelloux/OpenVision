
/* Address: 0x180004670; Evidence: ev_3eb6c1fbc20732889532bf87e3f74495823a3433dab06f4e4c1aaa849ee68586 */

char * FUN_180004670(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

