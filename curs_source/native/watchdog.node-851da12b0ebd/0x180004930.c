
/* Address: 0x180004930; Evidence: ev_8113e69db0ddb7c93de876c603441a29b310dbf7b58636fb1f3d3ce8068c6f58 */

char * FUN_180004930(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

