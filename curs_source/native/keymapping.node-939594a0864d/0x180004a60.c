
/* Address: 0x180004a60; Evidence: ev_786386130effab6b697d4d3d28080c1e70c2642fc06dc2f343bf9638675c23e5 */

char * FUN_180004a60(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

