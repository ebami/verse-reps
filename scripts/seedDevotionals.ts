(async () => {
  const { createClient } = await import('@supabase/supabase-js');

  const supabaseUrl = process.env.SUPABASE_URL as string;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables');
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const devotionals = [
    { verseRef: 'John 3:16', verseText: 'Sample verse text 1', challenge: 'Do 10 pushups' },
    { verseRef: 'Psalm 23:1', verseText: 'Sample verse text 2', challenge: 'Do 10 pushups' },
    { verseRef: 'Romans 8:28', verseText: 'Sample verse text 3', challenge: 'Do 10 pushups' },
    { verseRef: 'Philippians 4:13', verseText: 'Sample verse text 4', challenge: 'Do 10 pushups' },
    { verseRef: 'Genesis 1:1', verseText: 'Sample verse text 5', challenge: 'Do 10 pushups' },
    { verseRef: 'Proverbs 3:5', verseText: 'Sample verse text 6', challenge: 'Do 10 pushups' },
    { verseRef: 'Matthew 6:33', verseText: 'Sample verse text 7', challenge: 'Do 10 pushups' },
    { verseRef: 'Isaiah 41:10', verseText: 'Sample verse text 8', challenge: 'Do 10 pushups' },
    { verseRef: 'Psalm 119:105', verseText: 'Sample verse text 9', challenge: 'Do 10 pushups' },
    { verseRef: '1 Corinthians 13:4', verseText: 'Sample verse text 10', challenge: 'Do 10 pushups' },
    { verseRef: 'Galatians 5:22', verseText: 'Sample verse text 11', challenge: 'Do 10 pushups' },
    { verseRef: 'Ephesians 2:8', verseText: 'Sample verse text 12', challenge: 'Do 10 pushups' },
    { verseRef: 'Hebrews 11:1', verseText: 'Sample verse text 13', challenge: 'Do 10 pushups' },
    { verseRef: 'James 1:5', verseText: 'Sample verse text 14', challenge: 'Do 10 pushups' },
    { verseRef: '1 Peter 5:7', verseText: 'Sample verse text 15', challenge: 'Do 10 pushups' },
    { verseRef: '2 Timothy 1:7', verseText: 'Sample verse text 16', challenge: 'Do 10 pushups' },
    { verseRef: 'Jeremiah 29:11', verseText: 'Sample verse text 17', challenge: 'Do 10 pushups' },
    { verseRef: 'Romans 12:2', verseText: 'Sample verse text 18', challenge: 'Do 10 pushups' },
    { verseRef: 'Matthew 11:28', verseText: 'Sample verse text 19', challenge: 'Do 10 pushups' },
    { verseRef: 'Joshua 1:9', verseText: 'Sample verse text 20', challenge: 'Do 10 pushups' },
    { verseRef: 'Psalm 46:1', verseText: 'Sample verse text 21', challenge: 'Do 10 pushups' },
    { verseRef: 'Romans 5:8', verseText: 'Sample verse text 22', challenge: 'Do 10 pushups' },
    { verseRef: '1 John 1:9', verseText: 'Sample verse text 23', challenge: 'Do 10 pushups' },
    { verseRef: 'Luke 6:31', verseText: 'Sample verse text 24', challenge: 'Do 10 pushups' },
    { verseRef: 'Psalm 27:1', verseText: 'Sample verse text 25', challenge: 'Do 10 pushups' },
    { verseRef: 'Proverbs 18:10', verseText: 'Sample verse text 26', challenge: 'Do 10 pushups' },
    { verseRef: 'Romans 10:9', verseText: 'Sample verse text 27', challenge: 'Do 10 pushups' },
    { verseRef: 'Colossians 3:23', verseText: 'Sample verse text 28', challenge: 'Do 10 pushups' },
    { verseRef: 'John 14:6', verseText: 'Sample verse text 29', challenge: 'Do 10 pushups' },
    { verseRef: 'Matthew 28:19', verseText: 'Sample verse text 30', challenge: 'Do 10 pushups' }
  ];

  const { error } = await supabase
    .from('devotionals')
    .upsert(
      devotionals.map((d) => ({
        verse_ref: d.verseRef,
        verse_text: d.verseText,
        challenge: d.challenge,
      }))
    );

  if (error) {
    console.error('Failed to seed devotionals:', error);
    process.exit(1);
  } else {
    console.log('Seeded devotionals successfully!');
  }
})();
