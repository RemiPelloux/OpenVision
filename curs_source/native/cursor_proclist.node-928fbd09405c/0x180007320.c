
/* Address: 0x180007320; Evidence: ev_bef06da9aed25afedf795073043748625b3030b336cc72602bf23f7f3c3d2b6a */

undefined4 * FUN_180007320(undefined4 *param_1)

{
  void *pvVar1;
  
  *param_1 = 0;
  *(undefined8 *)(param_1 + 2) = 0;
  *(undefined8 *)(param_1 + 4) = 0;
  pvVar1 = operator_new(0x40);
  *(void **)pvVar1 = pvVar1;
  *(void **)((longlong)pvVar1 + 8) = pvVar1;
  *(void **)(param_1 + 2) = pvVar1;
  *(ulonglong *)(param_1 + 6) = 0;
  *(undefined8 *)(param_1 + 8) = 0;
  *(undefined8 *)(param_1 + 10) = 0;
  *(undefined8 *)(param_1 + 0xc) = 7;
  *(undefined8 *)(param_1 + 0xe) = 8;
  *param_1 = 0x3f800000;
  FUN_180008eb0((ulonglong *)(param_1 + 6),0x10,*(undefined8 *)(param_1 + 2));
  param_1[0x10] = 0;
  *(undefined8 *)(param_1 + 0x12) = 0;
  *(undefined8 *)(param_1 + 0x14) = 0;
  pvVar1 = operator_new(0x30);
  *(void **)pvVar1 = pvVar1;
  *(void **)((longlong)pvVar1 + 8) = pvVar1;
  *(void **)(param_1 + 0x12) = pvVar1;
  *(ulonglong *)(param_1 + 0x16) = 0;
  *(undefined8 *)(param_1 + 0x18) = 0;
  *(undefined8 *)(param_1 + 0x1a) = 0;
  *(undefined8 *)(param_1 + 0x1c) = 7;
  *(undefined8 *)(param_1 + 0x1e) = 8;
  param_1[0x10] = 0x3f800000;
  FUN_180006890((ulonglong *)(param_1 + 0x16),0x10,*(undefined8 *)(param_1 + 0x12));
  return param_1;
}

