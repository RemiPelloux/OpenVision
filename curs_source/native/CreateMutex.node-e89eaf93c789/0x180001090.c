
/* Address: 0x180001090; Evidence: ev_222ed4613afb3ab9884e96bff996e348d721cdc037db923c617516891faad97c */

char * FUN_180001090(longlong param_1)

{
  char *pcVar1;
  
  pcVar1 = "Unknown exception";
  if (*(char **)(param_1 + 8) != (char *)0x0) {
    pcVar1 = *(char **)(param_1 + 8);
  }
  return pcVar1;
}

