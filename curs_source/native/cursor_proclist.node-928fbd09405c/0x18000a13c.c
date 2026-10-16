
/* Address: 0x18000a13c; Evidence: ev_0af4b6003c4eed8abf31573bac6297789909af752199f4fe2a7c3c06648118c3 */

char * FUN_18000a13c(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(longlong *)(param_1 + 8) != 0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

