
/* Address: 0x180007a5c; Evidence: ev_dd7532948f801ba2172a50856620f667564ba9cb2b9de9590e514ea982141a9e */

undefined4 FUN_180007a5c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18001c3cc;
  LOCK();
  DAT_18001c3cc = 1;
  UNLOCK();
  return uVar1;
}

