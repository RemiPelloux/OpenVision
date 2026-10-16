
/* Address: 0x180001050; Evidence: ev_9d4c51bdbd0c32b598c4b83a98f4fef2b8ed4fd18f9b885f8ae00dda916d00f8 */

char * FUN_180001050(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "unknown exception";
  if (*(char **)(param_1 + 8) != (char *)0x0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

