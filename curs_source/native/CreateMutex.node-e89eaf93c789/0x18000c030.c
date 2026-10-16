
/* Address: 0x18000c030; Evidence: ev_b28840940e1ce2ea0d6be8cd15768ec87a22a79786b0d3dc848ebd63c0b531f9 */

undefined8 FUN_18000c030(char *param_1,longlong param_2,longlong param_3)

{
  char cVar1;
  __acrt_ptd *p_Var2;
  char *pcVar3;
  
  if ((param_1 != (char *)0x0) && (param_2 != 0)) {
    if (param_3 != 0) {
      pcVar3 = param_1;
      do {
        cVar1 = pcVar3[param_3 - (longlong)param_1];
        *pcVar3 = cVar1;
        pcVar3 = pcVar3 + 1;
        if (cVar1 == '\0') {
          return 0;
        }
        param_2 = param_2 + -1;
      } while (param_2 != 0);
      *param_1 = '\0';
      p_Var2 = FUN_18000c2b4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000affc();
      return 0x22;
    }
    *param_1 = '\0';
  }
  p_Var2 = FUN_18000c2b4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000affc();
  return 0x16;
}

