
/* Address: 0x180010ec4; Evidence: ev_90459f0258433ee2da5d2efe898ea858e09741a7780f84fa93c2cef9dfd62f73 */

void FUN_180010ec4(undefined8 *param_1,longlong param_2)

{
  undefined8 *puVar1;
  
  puVar1 = param_1 + param_2;
  for (; param_1 != puVar1; param_1 = param_1 + 1) {
    FUN_18000bff0((LPVOID)*param_1);
  }
  return;
}

