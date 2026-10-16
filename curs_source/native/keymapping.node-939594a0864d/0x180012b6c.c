
/* Address: 0x180012b6c; Evidence: ev_3a00e4767a41788ab54173ecc085f54abbb65b174860a6bcf64435837da6dc22 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8
FUN_180012b6c(ulonglong param_1,int param_2,uint param_3,undefined4 *param_4,char *param_5,
             longlong param_6)

{
  uint *puVar1;
  byte bVar2;
  sbyte sVar3;
  undefined4 uVar4;
  uint uVar5;
  ulonglong uVar6;
  undefined8 uVar7;
  __acrt_ptd *p_Var8;
  longlong lVar9;
  byte bVar10;
  char cVar11;
  int iVar12;
  uint uVar13;
  ulonglong uVar14;
  ulonglong uVar15;
  uint uVar16;
  char *pcVar17;
  uint uVar18;
  uint uVar19;
  int iVar20;
  char *pcVar21;
  ulonglong uVar22;
  uint uVar23;
  rsize_t _MaxCount;
  uint uVar24;
  uint uVar25;
  undefined8 uVar26;
  bool bVar27;
  double dVar28;
  undefined1 auStackY_828 [32];
  uint local_7f0;
  uint local_7ec;
  undefined8 local_7e8;
  uint local_7e0;
  uint local_7dc;
  uint local_7d8 [2];
  uint local_7d0;
  uint local_7cc;
  uint *local_7c8;
  byte local_7c0 [8];
  char local_7b8;
  uint *local_7b0;
  char *local_7a8;
  undefined4 *local_7a0;
  uint local_798;
  undefined8 local_794;
  uint local_5c8;
  uint local_5c4 [115];
  uint local_3f8;
  uint local_3f4 [115];
  uint local_228;
  uint local_224 [115];
  ulonglong local_58;
  
  local_58 = DAT_180027000 ^ (ulonglong)auStackY_828;
  local_7a8 = param_5;
  local_7dc = param_3;
  local_7a0 = param_4;
  FUN_180015640((uint *)local_7c0);
  uVar26 = 1;
  local_7b8 = (local_7c0[0] & 0x1f) != 0x1f;
  if ((bool)local_7b8) {
    FUN_1800156d0((ulonglong *)local_7c0);
  }
  *(char **)(param_4 + 2) = param_5;
  uVar4 = 0x20;
  if ((longlong)param_1 < 0) {
    uVar4 = 0x2d;
  }
  local_7d8[0] = 0;
  *param_4 = uVar4;
  FUN_1800155d0(local_7d8,0,0);
  uVar6 = param_1 >> 0x34 & 0x7ff;
  if (uVar6 == 0) {
    if (((param_1 & 0xfffffffffffff) != 0) && ((local_7d8[0] & 0x1000000) == 0)) {
LAB_180012d0e:
      local_7ec = 0;
      local_7cc = 0x8001f;
      FUN_1800155d0(&local_7d0,0,0);
      FUN_1800155d0(&local_7ec,0x8001f,local_7cc);
      local_7ec = param_2 + 1;
      uVar22 = (param_1 & 0x7fffffffffffffff) >> 0x34;
      uVar6 = (-(ulonglong)(uVar22 != 0) & 0x10000000000000) + (param_1 & 0xfffffffffffff);
      uVar25 = (2 - (uint)(uVar22 != 0)) + (uint)((param_1 & 0x7fffffffffffffff) >> 0x34);
      FUN_180015800();
      dVar28 = FUN_180015730();
      uVar5 = -(uint)(((int)dVar28 + 0x80000001U & 0xfffffffe) != 0) & (int)dVar28;
      uVar18 = (uint)(uVar6 >> 0x20);
      local_794 = uVar6;
      uVar23 = (uint)(uVar18 != 0);
      uVar16 = uVar23 + 1;
      if (uVar25 < 0x434) {
        if (uVar25 == 0x36) {
LAB_1800131a4:
          local_7e8 = (uint *)((ulonglong)local_7e8._4_4_ << 0x20);
          puVar1 = (uint *)((longlong)&local_794 + (ulonglong)(-(uint)(uVar18 != 0) & 4));
          iVar12 = 0x1f;
          bVar27 = *puVar1 == 0;
          if (!bVar27) {
            for (; *puVar1 >> iVar12 == 0; iVar12 = iVar12 + -1) {
            }
          }
          if (bVar27) {
            iVar12 = 0;
          }
          else {
            iVar12 = iVar12 + 1;
          }
          uVar23 = (iVar12 == 0x20) + uVar16;
          if (uVar23 < 0x74) {
            uVar18 = uVar23 - 1;
            while (uVar18 != 0xffffffff) {
              uVar24 = uVar18 - 1;
              if (uVar18 < uVar16) {
                iVar12 = *(int *)((longlong)&local_794 + (ulonglong)uVar18 * 4);
              }
              else {
                iVar12 = 0;
              }
              if (uVar24 < uVar16) {
                uVar13 = *(uint *)((longlong)&local_794 + (ulonglong)uVar24 * 4);
              }
              else {
                uVar13 = 0;
              }
              *(uint *)((longlong)&local_794 + (ulonglong)uVar18 * 4) = uVar13 >> 0x1f | iVar12 * 2;
              uVar18 = uVar24;
            }
          }
          else {
            uVar23 = 0;
          }
          uVar16 = 0x435 - uVar25 >> 5;
          local_798 = uVar23;
          FUN_180017a70((undefined1 (*) [32])local_3f4,0,(ulonglong)uVar16 * 4);
          local_3f4[uVar16] = 1 << ((byte)(0x435 - uVar25) & 0x1f);
        }
        else {
          local_3f4[1] = 0x100000;
          local_3f4[0] = 0;
          local_3f8 = 2;
          if (uVar18 == 0) goto LAB_1800131a4;
          uVar6 = 0;
          do {
            if (local_3f4[uVar6] != *(uint *)((longlong)&local_794 + uVar6 * 4)) goto LAB_1800131a4;
            uVar23 = (int)uVar6 + 1;
            uVar6 = (ulonglong)uVar23;
          } while (uVar23 != 2);
          local_7e8 = (uint *)((ulonglong)local_7e8._4_4_ << 0x20);
          iVar12 = 0x1f;
          if (uVar18 != 0) {
            for (; uVar18 >> iVar12 == 0; iVar12 = iVar12 + -1) {
            }
          }
          if (uVar18 == 0) {
            iVar12 = 0;
          }
          else {
            iVar12 = iVar12 + 1;
          }
          local_798 = (0x20U - iVar12 < 2) + uVar16;
          if (local_798 < 0x74) {
            uVar23 = local_798 - 1;
            while (uVar23 != 0xffffffff) {
              uVar18 = uVar23 - 1;
              if (uVar23 < uVar16) {
                iVar12 = *(int *)((longlong)&local_794 + (ulonglong)uVar23 * 4);
              }
              else {
                iVar12 = 0;
              }
              if (uVar18 < uVar16) {
                uVar24 = *(uint *)((longlong)&local_794 + (ulonglong)uVar18 * 4);
              }
              else {
                uVar24 = 0;
              }
              *(uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4) = uVar24 >> 0x1e | iVar12 * 4;
              uVar23 = uVar18;
            }
          }
          else {
            local_3f8 = 0;
            local_798 = 0;
            memcpy_s(&local_794,0x1cc,local_3f4,0);
          }
          uVar23 = local_798;
          uVar16 = 0x436 - uVar25 >> 5;
          FUN_180017a70((undefined1 (*) [32])local_3f4,0,(ulonglong)uVar16 * 4);
          local_3f4[uVar16] = 1 << ((byte)(0x436 - uVar25) & 0x1f);
        }
        local_3f8 = uVar16 + 1;
        _MaxCount = (ulonglong)local_3f8 << 2;
      }
      else {
        local_3f4[1] = 0x100000;
        local_3f4[0] = 0;
        local_3f8 = 2;
        if (uVar18 == 0) {
LAB_180012f65:
          local_7e8 = (uint *)((ulonglong)local_7e8._4_4_ << 0x20);
          uVar24 = uVar25 - 0x433 & 0x1f;
          uVar18 = uVar25 - 0x433 >> 5;
          sVar3 = (sbyte)uVar24;
          bVar10 = 0x20 - sVar3;
          uVar25 = (int)(1L << (bVar10 & 0x3f)) - 1;
          puVar1 = (uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4);
          iVar12 = 0x1f;
          bVar27 = *puVar1 == 0;
          if (!bVar27) {
            for (; *puVar1 >> iVar12 == 0; iVar12 = iVar12 + -1) {
            }
          }
          if (bVar27) {
            iVar12 = 0;
          }
          else {
            iVar12 = iVar12 + 1;
          }
          if ((uVar16 + uVar18 < 0x74) &&
             (local_798 = (0x20U - iVar12 < uVar24) + uVar16 + uVar18, local_798 < 0x74)) {
            uVar23 = local_798;
            while (uVar23 = uVar23 - 1, uVar23 != uVar18 - 1) {
              uVar24 = uVar23 - uVar18;
              if (uVar24 < uVar16) {
                uVar13 = *(uint *)((longlong)&local_794 + (ulonglong)uVar24 * 4);
              }
              else {
                uVar13 = 0;
              }
              if (uVar24 - 1 < uVar16) {
                uVar24 = *(uint *)((longlong)&local_794 + (ulonglong)(uVar24 - 1) * 4);
              }
              else {
                uVar24 = 0;
              }
              *(uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4) =
                   (uVar24 & ~uVar25) >> (bVar10 & 0x1f) | (uVar13 & uVar25) << sVar3;
            }
            uVar6 = 0;
            if (uVar18 != 0) {
              do {
                *(undefined4 *)((longlong)&local_794 + uVar6 * 4) = 0;
                uVar23 = (int)uVar6 + 1;
                uVar6 = (ulonglong)uVar23;
              } while (uVar23 != uVar18);
            }
          }
          else {
            local_3f8 = 0;
            local_798 = 0;
            memcpy_s(&local_794,0x1cc,local_3f4,0);
          }
          local_3f4[0] = 2;
        }
        else {
          uVar6 = 0;
          do {
            if (local_3f4[uVar6] != *(uint *)((longlong)&local_794 + uVar6 * 4)) goto LAB_180012f65;
            uVar18 = (int)uVar6 + 1;
            uVar6 = (ulonglong)uVar18;
          } while (uVar18 != 2);
          local_7e8 = (uint *)((ulonglong)local_7e8._4_4_ << 0x20);
          uVar24 = uVar25 - 0x432 & 0x1f;
          uVar18 = uVar25 - 0x432 >> 5;
          sVar3 = (sbyte)uVar24;
          bVar10 = 0x20 - sVar3;
          uVar25 = (int)(1L << (bVar10 & 0x3f)) - 1;
          puVar1 = (uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4);
          iVar12 = 0x1f;
          bVar27 = *puVar1 == 0;
          if (!bVar27) {
            for (; *puVar1 >> iVar12 == 0; iVar12 = iVar12 + -1) {
            }
          }
          if (bVar27) {
            iVar12 = 0;
          }
          else {
            iVar12 = iVar12 + 1;
          }
          if ((uVar16 + uVar18 < 0x74) &&
             (local_798 = (0x20U - iVar12 < uVar24) + uVar16 + uVar18, local_798 < 0x74)) {
            uVar23 = local_798;
            while (uVar23 = uVar23 - 1, uVar23 != uVar18 - 1) {
              uVar24 = uVar23 - uVar18;
              if (uVar24 < uVar16) {
                uVar13 = *(uint *)((longlong)&local_794 + (ulonglong)uVar24 * 4);
              }
              else {
                uVar13 = 0;
              }
              if (uVar24 - 1 < uVar16) {
                uVar24 = *(uint *)((longlong)&local_794 + (ulonglong)(uVar24 - 1) * 4);
              }
              else {
                uVar24 = 0;
              }
              *(uint *)((longlong)&local_794 + (ulonglong)uVar23 * 4) =
                   (uVar24 & ~uVar25) >> (bVar10 & 0x1f) | (uVar13 & uVar25) << sVar3;
            }
            uVar6 = 0;
            if (uVar18 != 0) {
              do {
                *(undefined4 *)((longlong)&local_794 + uVar6 * 4) = 0;
                uVar23 = (int)uVar6 + 1;
                uVar6 = (ulonglong)uVar23;
              } while (uVar23 != uVar18);
            }
          }
          else {
            local_3f8 = 0;
            local_798 = 0;
            memcpy_s(&local_794,0x1cc,local_3f4,0);
          }
          local_3f4[0] = 4;
        }
        local_3f4[1] = 0;
        _MaxCount = 4;
        local_3f8 = 1;
        uVar23 = local_798;
      }
      uVar26 = 1;
      local_5c8 = local_3f8;
      memcpy_s(local_5c4,0x1cc,local_3f4,_MaxCount);
      if ((int)uVar5 < 0) {
        uVar16 = -uVar5;
        local_7e8 = (uint *)CONCAT44(local_7e8._4_4_,uVar16);
        uVar6 = (ulonglong)uVar16 / 10;
        local_7f0 = (uint)uVar6;
        if (local_7f0 != 0) {
          do {
            local_7e0 = (uint)uVar6;
            if (0x26 < local_7e0) {
              local_7e0 = 0x26;
            }
            uVar16 = local_7e0 - 1;
            bVar10 = (&DAT_18001fde2)[(ulonglong)uVar16 * 4];
            bVar2 = (&DAT_18001fde3)[(ulonglong)uVar16 * 4];
            local_3f8 = (uint)bVar2 + (uint)bVar10;
            FUN_180017a70((undefined1 (*) [32])local_3f4,0,(ulonglong)bVar10 * 4);
            FUN_180017e30((undefined1 (*) [32])(local_3f4 + bVar10),
                          (undefined1 (*) [32])
                          (&DAT_18001f4d0 +
                          (ulonglong)*(ushort *)(&DAT_18001fde0 + (ulonglong)uVar16 * 4) * 4),
                          (ulonglong)bVar2 << 2);
            if (local_3f8 < 2) {
              uVar6 = (ulonglong)local_3f4[0];
              if (local_3f4[0] == 0) {
LAB_1800137f1:
                local_798 = 0;
                uVar23 = local_798;
                goto LAB_180013ab7;
              }
              if ((local_3f4[0] == 1) || (uVar23 == 0)) goto LAB_180013ab7;
              uVar22 = 0;
              uVar15 = 0;
              do {
                uVar14 = *(uint *)((longlong)&local_794 + uVar15 * 4) * uVar6 + uVar22;
                *(int *)((longlong)&local_794 + uVar15 * 4) = (int)uVar14;
                uVar22 = uVar14 >> 0x20;
                iVar12 = (int)(uVar14 >> 0x20);
                uVar16 = (int)uVar15 + 1;
                uVar15 = (ulonglong)uVar16;
              } while (uVar16 != uVar23);
LAB_18001383b:
              uVar23 = local_798;
              if (iVar12 == 0) goto LAB_180013ab7;
              if (local_798 < 0x73) {
                *(int *)((longlong)&local_794 + (ulonglong)local_798 * 4) = iVar12;
                local_798 = local_798 + 1;
                uVar23 = local_798;
                goto LAB_180013ab7;
              }
              uVar23 = 0;
              local_798 = 0;
              bVar27 = false;
            }
            else {
              if (uVar23 < 2) {
                uVar16 = (uint)local_794;
                uVar6 = local_794 & 0xffffffff;
                uVar22 = (ulonglong)local_3f8 << 2;
                local_798 = local_3f8;
                if ((ulonglong)local_3f8 != 0) {
                  if (uVar22 < 0x1cd) {
                    FUN_180017e30((undefined1 (*) [32])&local_794,(undefined1 (*) [32])local_3f4,
                                  uVar22);
                  }
                  else {
                    FUN_180017a70((undefined1 (*) [32])&local_794,0,0x1cc);
                    p_Var8 = FUN_18000b774();
                    *(undefined4 *)p_Var8 = 0x22;
                    FUN_18000821c();
                  }
                }
                if (uVar16 == 0) goto LAB_1800137f1;
                uVar23 = local_798;
                if ((uVar16 != 1) && (local_798 != 0)) {
                  uVar22 = 0;
                  uVar15 = 0;
                  do {
                    uVar14 = *(uint *)((longlong)&local_794 + uVar15 * 4) * uVar6 + uVar22;
                    *(int *)((longlong)&local_794 + uVar15 * 4) = (int)uVar14;
                    uVar22 = uVar14 >> 0x20;
                    iVar12 = (int)(uVar14 >> 0x20);
                    uVar23 = (int)uVar15 + 1;
                    uVar15 = (ulonglong)uVar23;
                  } while (uVar23 != local_798);
                  goto LAB_18001383b;
                }
              }
              else {
                local_7b0 = (uint *)&local_794;
                local_7c8 = local_3f4;
                uVar16 = local_3f8;
                if (local_3f8 < uVar23) {
                  uVar16 = uVar23;
                  local_7c8 = (uint *)&local_794;
                  local_7b0 = local_3f4;
                  uVar23 = local_3f8;
                }
                uVar22 = 0;
                uVar6 = 0;
                local_228 = 0;
                if (uVar23 != 0) {
                  do {
                    uVar18 = local_7b0[uVar6];
                    iVar12 = (int)uVar6;
                    if (uVar18 == 0) {
                      if (iVar12 == (int)uVar22) {
                        local_224[uVar6] = 0;
                        uVar22 = (ulonglong)(iVar12 + 1U);
                        local_228 = iVar12 + 1U;
                      }
                    }
                    else {
                      uVar15 = 0;
                      if (uVar16 != 0) {
                        do {
                          iVar20 = (int)uVar6;
                          uVar14 = uVar6;
                          if (iVar20 == 0x73) break;
                          if (iVar20 == (int)uVar22) {
                            local_224[uVar6] = 0;
                            local_228 = iVar20 + 1;
                          }
                          uVar14 = (ulonglong)(iVar20 + 1U);
                          uVar15 = (ulonglong)local_7c8[(uint)(iVar20 + -iVar12)] *
                                   (ulonglong)uVar18 + uVar15 + (ulonglong)local_224[uVar6];
                          local_224[uVar6] = (uint)uVar15;
                          uVar22 = (ulonglong)local_228;
                          uVar15 = uVar15 >> 0x20;
                          uVar6 = uVar14;
                        } while (iVar20 + 1U + -iVar12 != uVar16);
                        uVar18 = (uint)uVar15;
                        uVar6 = uVar14;
                        while (uVar18 != 0) {
                          iVar20 = (int)uVar6;
                          if (iVar20 == 0x73) goto LAB_180013b5e;
                          if (iVar20 == (int)uVar22) {
                            local_224[uVar6] = 0;
                            local_228 = iVar20 + 1;
                          }
                          uVar18 = local_224[uVar6];
                          local_224[uVar6] = (uint)(uVar18 + uVar15);
                          uVar22 = (ulonglong)local_228;
                          uVar18 = (uint)(uVar18 + uVar15 >> 0x20);
                          uVar15 = (ulonglong)uVar18;
                          uVar6 = (ulonglong)(iVar20 + 1);
                        }
                      }
                      if ((int)uVar6 == 0x73) goto LAB_180013b5e;
                    }
                    uVar6 = (ulonglong)(iVar12 + 1U);
                  } while (iVar12 + 1U != uVar23);
                }
                local_798 = (uint)uVar22;
                uVar23 = 0;
                if (uVar22 != 0) {
                  if (uVar22 << 2 < 0x1cd) {
                    FUN_180017e30((undefined1 (*) [32])&local_794,(undefined1 (*) [32])local_224,
                                  uVar22 << 2);
                    uVar23 = local_798;
                  }
                  else {
                    FUN_180017a70((undefined1 (*) [32])&local_794,0,0x1cc);
                    p_Var8 = FUN_18000b774();
                    *(undefined4 *)p_Var8 = 0x22;
                    FUN_18000821c();
                    uVar23 = local_798;
                  }
                }
              }
LAB_180013ab7:
              bVar27 = true;
            }
            if (!bVar27) goto LAB_180013b5e;
            local_7f0 = local_7f0 - local_7e0;
            uVar6 = (ulonglong)local_7f0;
          } while (local_7f0 != 0);
          uVar16 = (uint)local_7e8;
        }
        uVar18 = local_5c8;
        if (uVar16 % 10 != 0) {
          uVar16 = *(uint *)(&DAT_18001fe78 + (ulonglong)(uVar16 % 10 - 1) * 4);
          if (uVar16 == 0) {
LAB_180013b5e:
            local_798 = 0;
            uVar18 = local_5c8;
            uVar23 = local_798;
          }
          else if ((uVar16 != 1) && (uVar23 != 0)) {
            uVar6 = 0;
            uVar22 = 0;
            do {
              uVar15 = (ulonglong)*(uint *)((longlong)&local_794 + uVar22 * 4) * (ulonglong)uVar16 +
                       uVar6;
              *(int *)((longlong)&local_794 + uVar22 * 4) = (int)uVar15;
              uVar6 = uVar15 >> 0x20;
              uVar18 = (int)uVar22 + 1;
              uVar22 = (ulonglong)uVar18;
            } while (uVar18 != uVar23);
            iVar12 = (int)(uVar15 >> 0x20);
            uVar18 = local_5c8;
            uVar23 = local_798;
            if (iVar12 != 0) {
              if (0x72 < local_798) goto LAB_180013b5e;
              *(int *)((longlong)&local_794 + (ulonglong)local_798 * 4) = iVar12;
              local_798 = local_798 + 1;
              uVar23 = local_798;
            }
          }
        }
      }
      else {
        uVar6 = (ulonglong)uVar5 / 10;
        uVar16 = (uint)uVar6;
        uVar18 = local_5c8;
        while (uVar16 != 0) {
          local_7e0 = (uint)uVar6;
          if (0x26 < local_7e0) {
            local_7e0 = 0x26;
          }
          uVar25 = local_7e0 - 1;
          bVar10 = (&DAT_18001fde2)[(ulonglong)uVar25 * 4];
          bVar2 = (&DAT_18001fde3)[(ulonglong)uVar25 * 4];
          local_3f8 = (uint)bVar2 + (uint)bVar10;
          FUN_180017a70((undefined1 (*) [32])local_3f4,0,(ulonglong)bVar10 * 4);
          FUN_180017e30((undefined1 (*) [32])(local_3f4 + bVar10),
                        (undefined1 (*) [32])
                        (&DAT_18001f4d0 +
                        (ulonglong)*(ushort *)(&DAT_18001fde0 + (ulonglong)uVar25 * 4) * 4),
                        (ulonglong)bVar2 << 2);
          uVar25 = local_5c4[0];
          if (local_3f8 < 2) {
            uVar6 = (ulonglong)local_3f4[0];
            if (local_3f4[0] == 0) {
LAB_180013311:
              local_5c8 = 0;
LAB_180013314:
              uVar18 = local_5c8;
              goto LAB_18001366c;
            }
            if ((local_3f4[0] == 1) || (uVar18 == 0)) goto LAB_18001366c;
            uVar22 = 0;
            uVar15 = 0;
            do {
              uVar14 = local_5c4[uVar15] * uVar6 + uVar22;
              local_5c4[uVar15] = (uint)uVar14;
              uVar22 = uVar14 >> 0x20;
              uVar25 = (uint)(uVar14 >> 0x20);
              uVar24 = (int)uVar15 + 1;
              uVar15 = (ulonglong)uVar24;
            } while (uVar24 != uVar18);
LAB_1800133b3:
            uVar18 = local_5c8;
            if (uVar25 == 0) goto LAB_18001366c;
            if (local_5c8 < 0x73) {
              local_5c4[local_5c8] = uVar25;
              local_5c8 = local_5c8 + 1;
              goto LAB_180013314;
            }
            uVar18 = 0;
            local_5c8 = 0;
            bVar27 = false;
          }
          else {
            if (uVar18 < 2) {
              uVar6 = (ulonglong)local_5c4[0];
              uVar22 = (ulonglong)local_3f8 << 2;
              local_5c8 = local_3f8;
              if ((ulonglong)local_3f8 != 0) {
                if (uVar22 < 0x1cd) {
                  FUN_180017e30((undefined1 (*) [32])local_5c4,(undefined1 (*) [32])local_3f4,uVar22
                               );
                }
                else {
                  FUN_180017a70((undefined1 (*) [32])local_5c4,0,0x1cc);
                  p_Var8 = FUN_18000b774();
                  *(undefined4 *)p_Var8 = 0x22;
                  FUN_18000821c();
                }
              }
              if (uVar25 == 0) goto LAB_180013311;
              uVar18 = local_5c8;
              if ((uVar25 != 1) && (local_5c8 != 0)) {
                uVar22 = 0;
                uVar15 = 0;
                do {
                  uVar14 = local_5c4[uVar15] * uVar6 + uVar22;
                  local_5c4[uVar15] = (uint)uVar14;
                  uVar22 = uVar14 >> 0x20;
                  uVar25 = (uint)(uVar14 >> 0x20);
                  uVar18 = (int)uVar15 + 1;
                  uVar15 = (ulonglong)uVar18;
                } while (uVar18 != local_5c8);
                goto LAB_1800133b3;
              }
            }
            else {
              local_7c8 = local_5c4;
              local_7e8 = local_3f4;
              uVar25 = local_3f8;
              if (local_3f8 < uVar18) {
                uVar25 = uVar18;
                local_7e8 = local_5c4;
                uVar18 = local_3f8;
                local_7c8 = local_3f4;
              }
              local_5c8 = 0;
              uVar6 = 0;
              local_228 = 0;
              if (uVar18 != 0) {
                do {
                  uVar24 = local_7c8[uVar6];
                  uVar13 = (uint)uVar6;
                  if (uVar24 == 0) {
                    if (uVar13 == local_5c8) {
                      local_224[uVar6] = 0;
                      local_5c8 = uVar13 + 1;
                      local_228 = local_5c8;
                    }
                  }
                  else {
                    uVar22 = 0;
                    if (uVar25 != 0) {
                      do {
                        uVar19 = (uint)uVar6;
                        uVar15 = uVar6;
                        if (uVar19 == 0x73) break;
                        if (uVar19 == local_5c8) {
                          local_224[uVar6] = 0;
                          local_228 = uVar19 + 1;
                        }
                        uVar15 = (ulonglong)(uVar19 + 1);
                        uVar22 = (ulonglong)local_7e8[uVar19 + -uVar13] * (ulonglong)uVar24 +
                                 (ulonglong)local_224[uVar6] + uVar22;
                        local_224[uVar6] = (uint)uVar22;
                        uVar22 = uVar22 >> 0x20;
                        uVar6 = uVar15;
                        local_5c8 = local_228;
                      } while (uVar19 + 1 + -uVar13 != uVar25);
                      uVar24 = (uint)uVar22;
                      uVar6 = uVar15;
                      while (uVar24 != 0) {
                        uVar19 = (uint)uVar6;
                        if (uVar19 == 0x73) goto LAB_180013736;
                        if (uVar19 == local_5c8) {
                          local_224[uVar6] = 0;
                          local_228 = uVar19 + 1;
                        }
                        uVar24 = local_224[uVar6];
                        local_224[uVar6] = (uint)(uVar24 + uVar22);
                        uVar24 = (uint)(uVar24 + uVar22 >> 0x20);
                        uVar22 = (ulonglong)uVar24;
                        uVar6 = (ulonglong)(uVar19 + 1);
                        local_5c8 = local_228;
                      }
                    }
                    if ((int)uVar6 == 0x73) goto LAB_180013736;
                  }
                  uVar6 = (ulonglong)(uVar13 + 1);
                } while (uVar13 + 1 != uVar18);
              }
              uVar6 = (ulonglong)local_5c8 << 2;
              uVar18 = local_5c8;
              if ((ulonglong)local_5c8 != 0) {
                if (uVar6 < 0x1cd) {
                  FUN_180017e30((undefined1 (*) [32])local_5c4,(undefined1 (*) [32])local_224,uVar6)
                  ;
                  uVar18 = local_5c8;
                }
                else {
                  FUN_180017a70((undefined1 (*) [32])local_5c4,0,0x1cc);
                  p_Var8 = FUN_18000b774();
                  *(undefined4 *)p_Var8 = 0x22;
                  FUN_18000821c();
                  uVar18 = local_5c8;
                }
              }
            }
LAB_18001366c:
            bVar27 = true;
          }
          if (!bVar27) goto LAB_180013736;
          uVar16 = uVar16 - local_7e0;
          uVar6 = (ulonglong)uVar16;
        }
        if (uVar5 % 10 != 0) {
          uVar16 = *(uint *)(&DAT_18001fe78 + (ulonglong)(uVar5 % 10 - 1) * 4);
          if (uVar16 == 0) {
LAB_180013736:
            local_5c8 = 0;
LAB_180013739:
            uVar18 = local_5c8;
          }
          else if ((uVar16 != 1) && (uVar18 != 0)) {
            uVar6 = 0;
            uVar22 = 0;
            do {
              uVar15 = (ulonglong)local_5c4[uVar22] * (ulonglong)uVar16 + uVar6;
              local_5c4[uVar22] = (uint)uVar15;
              uVar6 = uVar15 >> 0x20;
              uVar25 = (int)uVar22 + 1;
              uVar22 = (ulonglong)uVar25;
            } while (uVar25 != uVar18);
            uVar16 = (uint)(uVar15 >> 0x20);
            uVar18 = local_5c8;
            if (uVar16 != 0) {
              if (0x72 < local_5c8) goto LAB_180013736;
              local_5c4[local_5c8] = uVar16;
              local_5c8 = local_5c8 + 1;
              goto LAB_180013739;
            }
          }
        }
      }
      pcVar21 = local_7a8;
      if (uVar23 != 0) {
        uVar6 = 0;
        uVar22 = 0;
        do {
          uVar15 = uVar6 + (ulonglong)*(uint *)((longlong)&local_794 + uVar22 * 4) * 10;
          *(int *)((longlong)&local_794 + uVar22 * 4) = (int)uVar15;
          uVar16 = (int)uVar22 + 1;
          uVar22 = (ulonglong)uVar16;
          uVar6 = uVar15 >> 0x20;
        } while (uVar16 != uVar23);
        iVar12 = (int)(uVar15 >> 0x20);
        if (iVar12 != 0) {
          if (local_798 < 0x73) {
            *(int *)((longlong)&local_794 + (ulonglong)local_798 * 4) = iVar12;
            local_798 = local_798 + 1;
          }
          else {
            local_798 = 0;
          }
        }
      }
      uVar6 = FUN_1800126e0(&local_798,&local_5c8);
      if ((int)uVar6 == 10) {
        uVar5 = uVar5 + 1;
        *pcVar21 = '1';
        pcVar17 = pcVar21 + 1;
        if (uVar18 != 0) {
          uVar6 = 0;
          uVar22 = 0;
          do {
            uVar15 = uVar6 + (ulonglong)local_5c4[uVar22] * 10;
            local_5c4[uVar22] = (uint)uVar15;
            uVar23 = (int)uVar22 + 1;
            uVar22 = (ulonglong)uVar23;
            uVar6 = uVar15 >> 0x20;
          } while (uVar23 != uVar18);
          uVar23 = (uint)(uVar15 >> 0x20);
          if (uVar23 != 0) {
            if (local_5c8 < 0x73) {
              local_5c4[local_5c8] = uVar23;
              local_5c8 = local_5c8 + 1;
            }
            else {
              local_5c8 = 0;
            }
          }
        }
      }
      else if ((int)uVar6 == 0) {
        uVar5 = uVar5 - 1;
        pcVar17 = pcVar21;
      }
      else {
        pcVar17 = pcVar21 + 1;
        *pcVar21 = (char)uVar6 + '0';
      }
      local_7a0[1] = uVar5;
      uVar23 = local_7ec;
      if (((-1 < (int)uVar5) && (local_7ec < 0x80000000)) && (local_7dc == 0)) {
        uVar23 = local_7ec + uVar5;
      }
      uVar6 = (ulonglong)uVar23;
      if (param_6 - 1U < (ulonglong)uVar23) {
        uVar6 = param_6 - 1U;
      }
      pcVar21 = pcVar21 + uVar6;
      bVar27 = false;
      while ((pcVar17 != pcVar21 && (local_798 != 0))) {
        uVar6 = 0;
        uVar22 = 0;
        do {
          uVar15 = (ulonglong)*(uint *)((longlong)&local_794 + uVar22 * 4) * 1000000000 + uVar6;
          *(int *)((longlong)&local_794 + uVar22 * 4) = (int)uVar15;
          uVar6 = uVar15 >> 0x20;
          uVar23 = (int)uVar22 + 1;
          uVar22 = (ulonglong)uVar23;
        } while (uVar23 != local_798);
        iVar12 = (int)(uVar15 >> 0x20);
        if (iVar12 != 0) {
          if (local_798 < 0x73) {
            *(int *)((longlong)&local_794 + (ulonglong)local_798 * 4) = iVar12;
            local_798 = local_798 + 1;
          }
          else {
            local_798 = 0;
          }
        }
        uVar6 = FUN_1800126e0(&local_798,&local_5c8);
        uVar23 = 8;
        do {
          uVar22 = (uVar6 & 0xffffffff) / 10;
          cVar11 = (char)uVar6 + (char)uVar22 * -10 + '0';
          if (uVar23 < (uint)((int)pcVar21 - (int)pcVar17)) {
            pcVar17[uVar23] = cVar11;
          }
          else if (cVar11 != '0') {
            bVar27 = true;
          }
          uVar23 = uVar23 - 1;
          uVar6 = uVar22;
        } while (uVar23 != 0xffffffff);
        lVar9 = (longlong)pcVar21 - (longlong)pcVar17;
        if (9 < lVar9) {
          lVar9 = 9;
        }
        pcVar17 = pcVar17 + lVar9;
      }
      *pcVar17 = '\0';
      if ((local_798 != 0) || (bVar27)) {
        uVar26 = 0;
      }
      local_7dc = 0;
      FUN_1800155d0(&local_7dc,local_7d0,local_7cc);
      goto LAB_180013d98;
    }
    param_4[1] = 0;
    pcVar21 = "0";
  }
  else {
    if (uVar6 != 0x7ff) goto LAB_180012d0e;
    if ((param_1 & 0xfffffffffffff) == 0) {
      uVar23 = 1;
    }
    else if (((longlong)param_1 < 0) && ((param_1 & 0xfffffffffffff) == 0x8000000000000)) {
      uVar23 = 4;
    }
    else {
      uVar23 = ~(uint)(param_1 >> 0x33) & 1 | 2;
    }
    param_4[1] = 1;
    if (uVar23 == 1) {
      uVar26 = FUN_18000b510(param_5,param_6,0x18001fea0);
      if ((int)uVar26 != 0) goto LAB_180013dd5;
      uVar26 = 0;
      goto LAB_180013d98;
    }
    if (uVar23 == 2) {
      pcVar21 = "1#QNAN";
    }
    else if (uVar23 == 3) {
      pcVar21 = "1#SNAN";
    }
    else {
      if (uVar23 != 4) goto LAB_180012d0e;
      pcVar21 = "1#IND";
    }
  }
  uVar7 = FUN_18000b510(param_5,param_6,(longlong)pcVar21);
  if ((int)uVar7 != 0) {
LAB_180013dd5:
                    /* WARNING: Subroutine does not return */
    _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
  }
LAB_180013d98:
  if (local_7b8 != '\0') {
    FUN_180015660((uint *)local_7c0);
  }
  return uVar26;
}

