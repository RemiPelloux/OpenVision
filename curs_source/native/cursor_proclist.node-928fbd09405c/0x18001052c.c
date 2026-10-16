
/* Address: 0x18001052c; Evidence: ev_bb61080a9703c8925ab393996905ea565310d3b8f5e2ef69d307fa2a587d492e */

undefined8 FUN_18001052c(undefined8 *param_1)

{
  LPVOID pvVar1;
  undefined8 uVar2;
  byte bVar3;
  ulonglong *puVar4;
  ulonglong uVar5;
  LPVOID pvVar6;
  ulonglong uVar7;
  ulonglong uVar8;
  ulonglong *puVar9;
  ulonglong *puVar10;
  
  puVar4 = *(ulonglong **)*param_1;
  if (puVar4 == (ulonglong *)0x0) {
LAB_1800106be:
    uVar2 = 0xffffffff;
  }
  else {
    bVar3 = (byte)DAT_180028040 & 0x3f;
    pvVar6 = (LPVOID)((DAT_180028040 ^ *puVar4) >> bVar3 | (DAT_180028040 ^ *puVar4) << 0x40 - bVar3
                     );
    puVar10 = (ulonglong *)
              ((DAT_180028040 ^ puVar4[1]) >> bVar3 | (DAT_180028040 ^ puVar4[1]) << 0x40 - bVar3);
    puVar4 = (ulonglong *)
             ((DAT_180028040 ^ puVar4[2]) >> bVar3 | (DAT_180028040 ^ puVar4[2]) << 0x40 - bVar3);
    if (puVar10 == puVar4) {
      uVar5 = (longlong)puVar4 - (longlong)pvVar6 >> 3;
      uVar7 = uVar5;
      if (0x200 < uVar5) {
        uVar7 = 0x200;
      }
      uVar8 = uVar7 + uVar5;
      if (uVar7 + uVar5 == 0) {
        uVar8 = 0x20;
      }
      if (uVar8 < uVar5) {
LAB_1800105ce:
        uVar8 = uVar5 + 4;
        pvVar1 = _recalloc_base(pvVar6,uVar8,8);
        FUN_1800116e0((LPVOID)0x0);
        if (pvVar1 == (LPVOID)0x0) goto LAB_1800106be;
      }
      else {
        pvVar1 = _recalloc_base(pvVar6,uVar8,8);
        FUN_1800116e0((LPVOID)0x0);
        if (pvVar1 == (LPVOID)0x0) goto LAB_1800105ce;
      }
      pvVar6 = pvVar1;
      uVar7 = DAT_180028040;
      puVar10 = (ulonglong *)((longlong)pvVar6 + uVar5 * 8);
      puVar4 = (ulonglong *)((longlong)pvVar6 + uVar8 * 8);
      uVar5 = (ulonglong)((longlong)puVar4 + (7 - (longlong)puVar10)) >> 3;
      if (puVar4 < puVar10) {
        uVar5 = 0;
      }
      puVar9 = puVar10;
      if (uVar5 != 0) {
        for (; uVar5 != 0; uVar5 = uVar5 - 1) {
          *puVar9 = uVar7;
          puVar9 = puVar9 + 1;
        }
      }
    }
    bVar3 = -((byte)DAT_180028040 & 0x3f) & 0x3f;
    *puVar10 = (*(ulonglong *)param_1[1] >> bVar3 | *(ulonglong *)param_1[1] << 0x40 - bVar3) ^
               DAT_180028040;
    bVar3 = -((byte)DAT_180028040 & 0x3f) & 0x3f;
    **(ulonglong **)*param_1 =
         ((ulonglong)pvVar6 >> bVar3 | (longlong)pvVar6 << 0x40 - bVar3) ^ DAT_180028040;
    bVar3 = -((byte)DAT_180028040 & 0x3f) & 0x3f;
    *(ulonglong *)(*(longlong *)*param_1 + 8) =
         ((ulonglong)(puVar10 + 1) >> bVar3 | (longlong)(puVar10 + 1) << 0x40 - bVar3) ^
         DAT_180028040;
    bVar3 = 0x40 - ((byte)DAT_180028040 & 0x3f) & 0x3f;
    uVar2 = 0;
    *(ulonglong *)(*(longlong *)*param_1 + 0x10) =
         ((ulonglong)puVar4 >> bVar3 | (longlong)puVar4 << 0x40 - bVar3) ^ DAT_180028040;
  }
  return uVar2;
}

