
/* Address: 0x180004790; Evidence: ev_b33d64f1a61fffef032312bdcb9222fd5e482e74c45a9e68810ad940d5ec95d6 */

char * FUN_180004790(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

