
/* Address: 0x180001320; Evidence: ev_8868c86541e96ffcbb2c709e8f53135420c570e38a374b51cf519a8af7e14d0c */

undefined1 (*) [32] FUN_180001320(undefined1 (*param_1) [32],ushort *param_2)

{
  ushort uVar1;
  ulonglong uVar2;
  longlong lVar3;
  undefined1 (*pauVar4) [32];
  undefined1 (*pauVar5) [32];
  ulonglong uVar6;
  byte bVar7;
  uint uVar8;
  uint uVar9;
  
  *(undefined8 *)*param_1 = 0;
  *(undefined8 *)(*param_1 + 8) = 0;
  *(undefined8 *)(*param_1 + 0x10) = 0;
  uVar8 = 0;
  *(undefined8 *)(*param_1 + 0x18) = 0xf;
  (*param_1)[0] = 0;
  uVar1 = *param_2;
  do {
    if (uVar1 == 0) {
      return param_1;
    }
    uVar9 = (uint)uVar1;
    if ((ushort)(uVar1 + 0x2800) < 0x400) {
      uVar8 = uVar9 * 0x400 + 0xfca10000;
    }
    else {
      if ((ushort)(uVar1 + 0x2400) < 0x400) {
        uVar9 = uVar8 | uVar9 - 0xdc00;
      }
      uVar6 = *(ulonglong *)(*param_1 + 0x18);
      bVar7 = (byte)uVar9;
      if (uVar9 < 0x80) {
        uVar2 = *(ulonglong *)(*param_1 + 0x10);
        if (uVar6 == uVar2) {
LAB_180001658:
          FUN_180001690(param_1);
        }
        else {
          *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
          pauVar4 = param_1;
          if (0xf < uVar6) {
            pauVar4 = *(undefined1 (**) [32])*param_1;
          }
          (*pauVar4)[uVar2] = bVar7;
          (*pauVar4)[uVar2 + 1] = 0;
        }
      }
      else {
        uVar2 = *(ulonglong *)(*param_1 + 0x10);
        pauVar4 = param_1;
        if (uVar9 < 0x800) {
          if (uVar6 == uVar2) {
LAB_180001440:
            FUN_180001690(param_1);
          }
          else {
            *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
            pauVar5 = param_1;
            if (0xf < uVar6) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar2] = (byte)(uVar9 >> 6) & 0x1f | 0xc0;
            (*pauVar5)[uVar2 + 1] = 0;
          }
LAB_18000144c:
          uVar6 = *(ulonglong *)(*param_1 + 0x10);
          bVar7 = bVar7 & 0x3f | 0x80;
          if (*(ulonglong *)(*param_1 + 0x18) == uVar6) goto LAB_180001658;
          *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
          if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
            lVar3 = *(longlong *)*param_1;
            *(byte *)(lVar3 + uVar6) = bVar7;
            *(undefined1 *)(lVar3 + 1 + uVar6) = 0;
            goto LAB_180001662;
          }
        }
        else {
          if (uVar9 < 0x10000) {
            if (uVar6 == uVar2) {
              FUN_180001690(param_1);
            }
            else {
              *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
              pauVar5 = param_1;
              if (0xf < uVar6) {
                pauVar5 = *(undefined1 (**) [32])*param_1;
              }
              (*pauVar5)[uVar2] = (byte)(uVar9 >> 0xc) & 0xf | 0xe0;
              (*pauVar5)[uVar2 + 1] = 0;
            }
            uVar6 = *(ulonglong *)(*param_1 + 0x10);
            if (*(ulonglong *)(*param_1 + 0x18) == uVar6) goto LAB_180001440;
            *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
            pauVar5 = param_1;
            if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar6] = (byte)(uVar9 >> 6) & 0x3f | 0x80;
            (*pauVar5)[uVar6 + 1] = 0;
            goto LAB_18000144c;
          }
          if (uVar6 == uVar2) {
            FUN_180001690(param_1);
          }
          else {
            *(ulonglong *)(*param_1 + 0x10) = uVar2 + 1;
            pauVar5 = param_1;
            if (0xf < uVar6) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar2] = (byte)(uVar9 >> 0x12) & 7 | 0xf0;
            (*pauVar5)[uVar2 + 1] = 0;
          }
          uVar6 = *(ulonglong *)(*param_1 + 0x10);
          if (*(ulonglong *)(*param_1 + 0x18) == uVar6) {
            FUN_180001690(param_1);
          }
          else {
            *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
            pauVar5 = param_1;
            if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar6] = (byte)(uVar9 >> 0xc) & 0x3f | 0x80;
            (*pauVar5)[uVar6 + 1] = 0;
          }
          uVar6 = *(ulonglong *)(*param_1 + 0x10);
          if (*(ulonglong *)(*param_1 + 0x18) == uVar6) {
            FUN_180001690(param_1);
          }
          else {
            *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
            pauVar5 = param_1;
            if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
              pauVar5 = *(undefined1 (**) [32])*param_1;
            }
            (*pauVar5)[uVar6] = (byte)(uVar9 >> 6) & 0x3f | 0x80;
            (*pauVar5)[uVar6 + 1] = 0;
          }
          uVar6 = *(ulonglong *)(*param_1 + 0x10);
          bVar7 = bVar7 & 0x3f | 0x80;
          if (*(ulonglong *)(*param_1 + 0x18) == uVar6) goto LAB_180001658;
          *(ulonglong *)(*param_1 + 0x10) = uVar6 + 1;
          if (0xf < *(ulonglong *)(*param_1 + 0x18)) {
            pauVar4 = *(undefined1 (**) [32])*param_1;
          }
        }
        (*pauVar4)[uVar6] = bVar7;
        (*pauVar4)[uVar6 + 1] = 0;
      }
LAB_180001662:
      uVar8 = 0;
    }
    uVar1 = param_2[1];
    param_2 = param_2 + 1;
  } while( true );
}

