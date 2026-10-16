
/* Address: 0x180005784; Evidence: ev_70af778eeb4d6660d24e0ac5bf3c4c21754f480e180c0e4fdd4ef3725193414a */

int FUN_180005784(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}

