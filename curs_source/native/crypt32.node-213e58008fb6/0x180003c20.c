
/* Address: 0x180003c20; Evidence: ev_5661678f3c17881871fe4fb722d3f024899c7e5e62689251024c93c1c5f5c429 */

void FUN_180003c20(undefined8 *param_1)

{
  code *pcVar1;
  ulonglong *puVar2;
  ulonglong *puVar3;
  ulonglong local_78 [15];
  
  puVar3 = local_78;
  puVar2 = FUN_1800023d0(puVar3,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  FUN_1800040e0(puVar3,(longlong)puVar2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

