
/* Address: 0x18000683c; Evidence: ev_f788335aefa3c83d86f24becb63909b49919c3c3117ed6ff8e34dde97727606c */

undefined4 FUN_18000683c(void)

{
  undefined4 uVar1;
  
  uVar1 = DAT_18001a304;
  LOCK();
  DAT_18001a304 = 1;
  UNLOCK();
  return uVar1;
}

