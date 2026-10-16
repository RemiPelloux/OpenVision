
/* Address: 0x180006dac; Evidence: ev_8a04493bece1f991ec4aa715e725ab0604e36a82f9e2a890fc245b487ec9557a */

int FUN_180006dac(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}

