
/* Address: 0x1800053a0; Evidence: ev_1e8fd742b62bf08ea9ff9e67385c21d470dcdf56b1a883f139effb9400d1067c */

void FUN_1800053a0(longlong *param_1)

{
  undefined8 *puVar1;
  undefined8 *puVar2;
  
  puVar1 = (undefined8 *)*param_1;
  *(undefined8 *)puVar1[1] = 0;
  puVar1 = (undefined8 *)*puVar1;
  while (puVar1 != (undefined8 *)0x0) {
    puVar2 = (undefined8 *)*puVar1;
    thunk_FUN_1800116e0(puVar1);
    puVar1 = puVar2;
  }
  thunk_FUN_1800116e0((LPVOID)*param_1);
  return;
}

