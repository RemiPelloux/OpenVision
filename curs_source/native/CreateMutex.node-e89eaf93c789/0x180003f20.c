
/* Address: 0x180003f20; Evidence: ev_a23797fc74530033fdc7e14d4d3e233705b47d158f3859867d138598550bc38c */

void FUN_180003f20(undefined8 *param_1)

{
  code *pcVar1;
  ulonglong *puVar2;
  ulonglong *puVar3;
  ulonglong local_78 [15];
  
  puVar3 = local_78;
  puVar2 = FUN_180002260(puVar3,*(ulonglong *)*param_1,*(ulonglong *)param_1[1]);
  FUN_180004360(puVar3,(longlong)puVar2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

