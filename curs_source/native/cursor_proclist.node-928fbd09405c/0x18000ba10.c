
/* Address: 0x18000ba10; Evidence: ev_689fd91c693fdfc4b01318c4b960837f0ae36274e7a8c416aff490e6aaea20c3 */

int FUN_18000ba10(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}

